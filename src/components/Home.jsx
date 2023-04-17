import React from 'react'
import styled from 'styled-components'
import rightimg from '../assets/chat.png'
import github from '../assets/github.png'

const Section = styled.section`
    height: 100vh;
    padding: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #edededb8;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        padding: 1rem;
        text-align: center;
        padding-top: 8rem;
    }

    .left{
        flex: 1;
        padding: 1rem;

        img{
            margin-top: 1rem;
            cursor: pointer;
            transition: all 0.5s ease;
            &:hover{
                transform: scale(1.1);
            }
        }
        h1{
            font-size: 2.25rem;
            color: rgb(114 157 244);
        }
        h4{
            font-size: 1.5rem;
            margin-top: 1rem;
            color: lightblue;
            font-weight: 500;
        }
    }

    .right{
        flex: 1;
        padding: 1rem;

        img{
            transform: scale(0.8);
            padding-bottom: 7rem;
        }
    }
       
`

const Home = () => {
  return (
    <Section>
        <div className="left">
            <h1>Welcome to the Chat page</h1>
            <h4>Sign in to start chatting</h4>
            <a href="https://github.com/wagehzaietr" target='_blank'><img src={github} alt="" width={35}/></a>
        </div> 
        <div className="right">
            <img src={rightimg} alt="" width='100%' height='100%'/>
        </div>
    </Section>
  )
}

export default Home