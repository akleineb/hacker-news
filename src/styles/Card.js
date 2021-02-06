import styled from 'styled-components'

export const Card = styled.div`
  padding: 0.4rem 1rem;
  border-radius: 6px;

  transition: box-shadow .25s ease-out,transform .25s ease-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 20%);
  }

  a {
    color: #1f1f1f;
    background-color: #f8dc3d;
    text-decoration: none;
  }
`