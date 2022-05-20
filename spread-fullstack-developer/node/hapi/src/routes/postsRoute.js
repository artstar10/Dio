import Joi from "joi";

import PostsController from "../controllers/posts.js";
import PostsModel from "../models/posts.js";

const postsController = new PostsController(PostsModel)

const postsRoute = (server) => {

    server.route({
        method: 'GET',
        path: '/posts/{id?}',
        handler: (request) => postsController.find(request)
    })

    server.route({
        method: 'POST',
        path: '/posts',
        handler: (request, h) => postsController.create(request, h),
        options: {
            validate:{
                payload: {
                    title: Joi.string().required(),
                    content: Joi.string().required(),
                    auth: Joi.string().required(),
                }
            } 
        }
    })

    server.route({
        method: 'PUT',
        path: '/posts{id}',
        handler: (request, h) => postsController.update(request, h)
    })
    
    server.route({
        method: 'DELETE',
        path: '/posts{id}',
        handler: (request, h) => postsController.delete(request, h)
    })

}

module.exports = postsRoute