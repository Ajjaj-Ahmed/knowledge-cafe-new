import PropTypes from 'prop-types';

const Bookmark = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h2>Bookmarks Blogs:{bookmarks.length}</h2>
        </div>
    );
};

Bookmark.propTypes ={
    bookmarks: PropTypes.array

}
export default Bookmark;