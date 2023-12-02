import React from 'react';

const DynamicPage = ({ params, searchParams }) => {
    console.log(searchParams);
    return (
        <div>
            <h2>This Dynamic Page {params.id}  </h2>
            <h2>Search By {searchParams.category}  </h2>
        </div>
    );
};

export default DynamicPage;