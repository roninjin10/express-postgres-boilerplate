import { Router } from 'express'

const router = Router();

//Homepage Route
router.get('/', function(req, res){
    res.status(200).end();
});

//Other Routes

export default router;