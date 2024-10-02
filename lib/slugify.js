import slugify from "slugify";

async function slugFormData(formData){
    const slug = slugify(formData.client);
    //console.log(slug)
    //return slug;
}

export {slugFormData};