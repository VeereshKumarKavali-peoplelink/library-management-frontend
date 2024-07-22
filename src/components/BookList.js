import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import useAuth from '../hooks/useAuth';
import { getAllBooks } from '../services/bookService';

const BookList = () => {
    const { auth } = useAuth();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const booksData = await getAllBooks(auth.token);
                setBooks(booksData);
            } catch (err) {
                console.error(err.message);
            }
        };
        if (auth) {
            fetchBooks();
        }
    }, [auth]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Books</Typography>
            <List>
                {books.map(book => (
                    <ListItem key={book._id}>
                        <ListItemText primary={book.title} secondary={book.author} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default BookList;
