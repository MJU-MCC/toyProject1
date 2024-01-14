import React from "react";


function Signup(){
    const pwCheck=passwd===passwdCheck;

    return (
        <div className="box">
            <div className="id">
                <input type="text" className="idtext"></input>
                <button>중복확인</button>
            </div>
            <div className="password">
                <input type="password" className="passwordtext" value={passwd}></input>
                <input type="password" className="passwordcheck" value={passwdCheck}></input>
                {passwdCheck!=='일치'&&!pwCheck&&(<p>비밀번호를 확인해주세요</p>)}
            </div>
            <button>가입하기</button>
        </div>
    )
}
export default Signup