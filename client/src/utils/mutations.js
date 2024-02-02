import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user {    
                _id
                username
                email
                bookCount
                savedBooks
            }
        }
    }
`
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password) {
            token
            user {    
                _id
                username
                email
                bookCount
                savedBooks
            }
        }
    }
`
export const SAVE_BOOK = gql`
    mutation saveBook($userId: String!, $data: saveBookContent!  ){
        saveBook(userId: $userId, data: $data ) {
            user {    
                _id
                username
                email
                bookCount
                savedBooks
            }
        }
    }
`
export const REMOVE_BOOK = gql`
    mutation removeBook($userId: String!, $bookId: String!){
        removeBook(userId: $userId, bookId: $bookId) {
            user {    
                _id
                username
                email
                bookCount
                savedBooks
            }

        }
    }
`