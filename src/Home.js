
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // this run after something in web ran
    

    return ( 
        <div className="home">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
     );
}
 
export default Home;