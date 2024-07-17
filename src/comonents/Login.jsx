export function Login(){
    const backgroundStyle = {
        width:'1920px',
        height:'1080px',
        backgroundColor:'#ccc'
    }
    
    const divStyle = {
        width:'340px',
        height:'300px',
        padding:'5px',
        boxShadow:'0px 0px 10px gray',
        margin:'0 auto',
        borderRadius:'5px',
        textAlign:'center',
        backgroundColor:'white',
        position:'absolute',
        top:'50%',
        left:'42%',
        transform: 'translateY(-50%)'
    }
    
    const titleStyle = {
        fontSize:'24px'
        
    }
    const boxStyle={
        width:'300px',
        height:'30px',
        display:'block',
        margin:'10px auto'
    }
    const btnStyle = {
        width:'308px',
        height:'30px',
        display:'block',
        border:'none',
        backgroundColor:'rgb(0, 119, 255)',
        color:'white',
        margin:'0 auto',
        borderRadius:'5px'
    }
    const textboxStyle={
        overflow:'hidden',
        display:'flex',
        justifyContent:'center'
    }
    const textStyle = {
        lineHeight:'53px',
        marginLeft:'5px'
    }
    return(
        <div style={backgroundStyle}>
            <div style={divStyle}>
                <h4 style={titleStyle}>Login</h4>
                <input type="text" placeholder="Username" style={boxStyle}/>
                <input type="text" placeholder="Password" style={boxStyle}/>
                <button style={btnStyle}>Login</button>
                <div style={textboxStyle}>
                    <p>Don't have an account?</p>
                    <a href="#" style={textStyle}>Register</a>
                </div>
            </div>
        </div>
    );
}