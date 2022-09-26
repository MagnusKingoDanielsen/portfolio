import parse from "html-react-parser";


export default function PostItem({ post }) {
    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article>
            <div className={post.acf.item}>
            <h2>{parse(post.title.rendered)}</h2>
            <p>{parse(post.content.rendered)}</p>
            <p id="tags">{post.acf.tags}</p>
            <button>{post.acf.website ? <a href={post.acf.website} target="_blank">Link til hjemmesiden</a> : <p>Intet Link</p>}</button>
            </div>
            <div className={post.acf.item2}>
            <img src={post.acf.Image ? post.acf.Image.url : image} alt={post.acf.image ? post.act.image.alt : "Default billede"}/>
            </div>
        </article>
    );
}