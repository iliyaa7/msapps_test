Doucomentaion for using this api


End point /images

Searching for avalibale images based on 4 query params.

category - a string for searching data (can not be empty).
pageNum - the number of the current page of the query, must be a number above 0 (can not be empty).
perPage - the number of images per page, must be a number between 3 or 200.

order (optional) - How the results should be ordered. Accepted values: "popular", "latest". Default: "popular".


End point /images/:id

Searching for a specific image by id based on id path param.

The id must be a number.

