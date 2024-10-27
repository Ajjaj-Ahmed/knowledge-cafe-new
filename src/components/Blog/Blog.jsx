import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddBookmark }) => {
    const {cover_image,title,author_img,
        reading_time,writer,posted_time,hashtags} = blog
    
    return (
        <div>
            <img className='w-full h-[200px] md:h-[400px] object-cover' src={cover_image} alt="" />
            <div className='flex justify-between pt-4'>
                <div className='flex items-center gap-3'>
                    <img className='w-14 h-14 rounded-full' src={author_img}  />
                    <div>
                    <p>{writer}</p>
                    <span>{posted_time}</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddBookmark(blog)} className='text-xl'><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-xl md:text-3xl font-semibold py-3'>{title}</h2>
            <div className='pb-3'>
                {hashtags.map((hash,idx)=><span className='mr-2 text-lg text-gray-400' key={idx}><a href="#">{hash}</a></span>)}
            </div>
        </div>
    );
};

Blog.propTypes ={
   blog:PropTypes.object,
   handleAddBookmark: PropTypes.func
}

export default Blog;