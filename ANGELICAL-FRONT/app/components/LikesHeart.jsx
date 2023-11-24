export default function LikesHeart({ videoId, soma, num }) {

    const likes = parseFloat(soma / num);

    const heart = [];

    for (let index = 1; index <= likes; index++) {
        heart.push(<i className="bi bi-heart-fill text-danger" key={index}></i>);

    }
    if (likes % 1 >= 0.25 && likes % 1 <= 0.75) {
        heart.push(<i className="bi bi-heart-half text-danger" key={heart.length + 1}></i>);
    } else if (likes % 1 > 0.75) {
        heart.push(<i className="bi bi-heart-fill text-danger" key={heart.length + 1}></i>);
    }

    return (
        <div className="float-start">
            {heart}
        </div>
    );
}
