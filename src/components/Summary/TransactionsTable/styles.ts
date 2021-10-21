import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 .5rem;
    
        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: .25rem;

            &:first-child{
                color: var(--text-title);
            }

            &.deposit{
                color: var(--green);
            }

            &.withdraw{
                color: var(--red);
            }
        }
        @media (max-width: 538px){
            border-spacing: 0;
            th{
                padding: 1rem;
            }
            td{
                padding: 1rem;
            }
        }
        @media (max-width: 425px){
            th{
                padding: 0.5rem;
            }
            td{
                padding:0.5rem 0.2rem;
            }
        }
    }
`;