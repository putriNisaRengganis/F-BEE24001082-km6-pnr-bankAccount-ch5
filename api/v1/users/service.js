import prisma from '../../../config/db.js'
import crypto from 'crypto'
import jsonWebtoken from 'jsonwebtoken'
import { markAsUntransferable } from 'worker_threads'

const getAll = async () => {
    return prisma.user.findMany()
}

const getById = async (id) => {
    return prisma.user.findUnique({
        where: {
            id: parseInt(id)
        },
        include: {
            profile: true
        }
    })
}

const create = async (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
        throw new Error("Invalid email format")
    }

    const hash = crypto.createHash('sha1');
    data.password = hash.update(data.password).digest('hex');

    return prisma.user.create({
        data: {
            ...data
        }
    })
}

const update = async (id, data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (data.email && !emailRegex.test(data.email)) {
        throw new Error("Invalid email format")
    }

    if (data.password) {
        const hash = crypto.createHash('sha1');
        data.password = hash.update(data.password).digest('hex');
    }

    return prisma.user.update({
        where: {
            id: parseInt(id)
        },
        data: {
            ...data
        }
    })
}

const deleteData = async (id) => {
    return prisma.user.delete({
        where: {
            id: parseInt(id)
        }
    })
}

const createWithProfile = async (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
        throw new Error("Invalid email format")
    }

    const hash = crypto.createHash('sha1');
    data.password = hash.update(data.password).digest('hex');

    const profileData = data.profile;
    delete data.profile;
    return prisma.user.create({
        data: {
            ...data,
            profile: {
                create: {
                    ...profileData
                }
            }
        },
        include: {
            profile: true
        }
    })
}

const login = async (email, password) => {
    const hash = crypto.createHash('sha1');
    const users = await prisma.user.findFirst({
        where: {
            email: email,
        }
    });

    if (!users){
        throw new Error("Inavlid email or password")
    }
    if (users.password !== hash.update (password).digest('hex')){
        throw new Error ("invalid email or password")
    }

    delete users.password;

    const token = jsonWebtoken.sign({
        id: users.id,
        email: users.email, 
    }, process.env.JWT_SECRET_KEY,{
        expiresIn: '1h'
    });

    return {
        ...users,
        token
    }
}
export { getAll, getById, update, deleteData, create, createWithProfile,login}