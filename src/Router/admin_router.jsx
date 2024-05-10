import Add_Blog from "../Admin/Blog/Add_Blog"
import Blog_Management from "../Admin/Blog/Blog_Management"


const admin_router = [
    {
        path: "",
        element: <Blog_Management />,
    },
    {
        path: "blog-management",
        element: <Blog_Management />,
    },
    {
        path: "blog-management/add-blog",
        element: <Add_Blog />
    }

]
export default admin_router