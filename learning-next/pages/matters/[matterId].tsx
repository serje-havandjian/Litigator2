import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps<{matter: Matter}>= async (context) => {
  // fetching data here
  // Return the data as props
  const res = await fetch('http://localhost:8000')
  const matter: Matter = await res.json()
  console.log(matter)
  return {
    props: {
      matter,
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
  interface MatterProps {
    matter: Matter;
  }

const Matter = ({ matter }: MatterProps) => {
  const router = useRouter()
  console.log('testing props getting passed: ', matter)
  console.log('jura: ', matter)

  const { matterId } = router.query

  return (
    <div>
      <h1>{matter.title}</h1>
      <p>{matter.trailDate}</p>
      <div>
        <h2>Jurisdiction: {matter.jurisdiction.name}</h2>
      </div>
      <ul>
        {matter.opposingCounsels.map(counsel => {
          return (
            <li key={counsel.id}>{counsel.name}</li>
            )
        })}
      </ul>
    </div>

  )
}

export default Matter