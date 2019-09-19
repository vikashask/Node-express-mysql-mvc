module.exports.getBrandIdValidator = (req,res,next) => {
    let brandId = req.params.brand_id;
    console.log('brandId',brandId);
    
    if(brandId){
        next();
    }
    else{
        return res.status(400).json({error:'brand_id required in params'});
    }
}
module.exports.postBrandIdValidator = (req,res,next) => {
    let brandId = req.body.brand_id;
    if(brandId){
        next();
    }
    else{
        return res.status(400).json({error:'brand_id required in body'});
    }
}