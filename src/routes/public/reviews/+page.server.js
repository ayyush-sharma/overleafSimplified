export async function load({ fetch }) {

    console.log("Initial Load Function Initialised")
    return await fetchData();
    // const url = `http://localhost:8000/get-all-reviews`;
    
    // try{
    //     const response = await fetch(url);
    //     let initData = await response.json(); 
    //     return {
    //         success:true,
    //         message:"Welcome Home",
    //         body:initData,
    //     }

    // }catch(error){
    //     return {
    //         success:false,
    //         message:"Error Loading Data",
    //         body:[],
    //     }
    // }
}

const fetchData = async () => {
    let updatedData = [];
    const url = `https://latexbackend.vercel.app/get-all-reviews`;
    try {
      const response = await fetch(url);
      updatedData = await response.json();
      return {
        success: true,
        message: "Data Retrieved",
        body: updatedData,
      };
    } catch (err) {
      console.error(`Error Occured on Fetching Data at fetchData Function `, err);
      return {
        success: false,
        message: "Error Loading Data",
        body: [],
      };
    }
  };


export const actions = {
    addreview: async ({  request }) => {
      const formresponse = await request.formData();
      const data = JSON.parse(formresponse.get('reviewData'))
      console.log(data);

      try{
        const response = await fetch('https://latexbackend.vercel.app/addreview',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                name:data.name,
                comment:data.comment,
                rating:data.rating,
                avatarType:data.avatarType
            })
        });

        const responseData = await response.json();
        if(responseData.error){
            return fail(401, {
                        success: false,
                        message: responseData.message,
                      });
        }
        return await fetchData();
        
      }catch(err){
        return({
            success:false,
            message:err
        })
        
      }

    },
  };