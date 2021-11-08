export default {
    auth(to, from, next) {
        const token = localStorage.getItem('token');
        //validar token
                
        if(!token){
            return next('/');
        }

        next();
    }
}