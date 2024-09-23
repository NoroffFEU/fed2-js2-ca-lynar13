import api from '../../api/instance.js';
import { onDeletePost } from './deletePost.js';

export async function onViewPost(id) {
    try {
        const post = await api.post.read(id);
        document.querySelector('#title').textContent = post.title;
        document.querySelector('#body').textContent = post.body;
        document.querySelector('#tags').textContent = post.tags.join(', ');
        document.querySelector('a.update').href = post.id;

        document.querySelector('#deletePost').addEventListener('click', onDeletePost);
    } catch (error) {
        alert(error.message);
        window.location.href = '/';
    }
}