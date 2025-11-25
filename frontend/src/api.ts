/* eslint-disable @typescript-eslint/no-explicit-any */
const API_URL = "http://localhost:3000";

export async function getQuizzes() {
    return fetch(`${API_URL}/quizzes`).then(res => res.json());
}

export async function getQuiz(id: string) {
    return fetch(`${API_URL}/quizzes/${id}`).then(res => res.json());
}

export async function createQuiz(data: any) {
    return fetch(`${API_URL}/quizzes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }).then(res => res.json());
}

export async function deleteQuiz(id: number) {
    return fetch(`${API_URL}/quizzes/${id}`, { method: "DELETE" });
}