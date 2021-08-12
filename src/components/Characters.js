import {Grid,Card} from '@material-ui/core';
import '../App.css';

const Characters=(props)=>{
const{char_id,name,occupation,birthday,status} = props.updatelist;
    return(

        <Grid item xs={4} >
          <Card  className="card" onClick={()=>
            props.updateindex(char_id)
            }   >
          
            <p key={char_id} >Name: {name}<br></br>Occupation: {occupation}<br></br>DOB: {birthday}<br></br>Status: {status} </p>
           
            </Card>
            </Grid>
          
           
         

    )
}
export default Characters;