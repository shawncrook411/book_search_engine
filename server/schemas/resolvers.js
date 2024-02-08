const { User } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, { }, context) => {
            console.log('me')
            return await User.findOne({ _id: context.user._id })
        }
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })
        
            if (!user) throw AuthenticationError

            const bool = await User.isCorrectPassword(password)
            if (!bool) throw AuthenticationError

            const token = signToken(user)
            return { token, user }
        },

        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password, })
            const token = signToken(user)

            return { token, user }
        },

        saveBook: async (parent, { data }, context) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedBooks: data } },
                { new: true, runValidators: true }
            )
            return updatedUser
        },

        removeBook: async(parent, { bookId }, context) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
            )
            if (!updatedUser) return { message: 'Failed to find user'}
            return updatedUser
        }


    }
}

module.exports = resolvers