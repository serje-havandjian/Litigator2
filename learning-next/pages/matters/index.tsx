import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps<{matters: Matter[]}>= async (context) => {
  // fetching data here
  // Return the data as props
  const res = await fetch('http://localhost:8000')
  const matters: Matter[] = await res.json()
  console.log(matters)
  return {
    props: {
      matters,
    }
  };
};


type Jurisdiction = {
  id: number;
  name: string
}

type Counsel = {
  id: number,
  name: string
}

type Matter = {
  id: number;
  title: string;
  trailDate: string;
  jurisdiction: Jurisdiction;
  opposingCounsels: Counsel[];
};

// export default function productsPage({ product }: PropductProps) {
  interface MattersProps {
    matters: Matter[];
  }

const Matters = ({ matters }: MattersProps) => {
  console.log('testing props getting passed: ', matters)
  console.log('jura: ', matters)

  return (
  <div>
    <h1>List of all matters</h1>
    {matters.map((matter) => {
        return (
          <div key={matter.id}>
            <h1>{matter.title}</h1>
            <p>{matter.trailDate}</p>
            <div>
              <h2>Jurisdiction: {matter.jurisdiction.name}</h2>
            </div>
            <ul>
              {matter.opposingCounsels.map((counsel) => {
                return <li key={counsel.id}>{counsel.name}</li>;
              })}
            </ul>
          </div>
        );
    })}

  </div>
  )
}

export default Matters