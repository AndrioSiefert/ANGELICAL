import Link from "next/link";

async function getVideo(id) {
    const response = await fetch('http://localhost:3004/videos/' + id)
    const dado = await response.json()
    return dado
}