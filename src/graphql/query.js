import {gql} from '@apollo/client';

export const GET_ALL_POST=(page) => gql`
  query posts {
      posts(options:{paginate:{page:${page},limit:6}}) {
        data{
          id
          title
        }
      }
    }
`;
export const GET_POST = (id) => gql`
query post{
  post(id:${id}){
      id
      title
      body
    }
}
`
