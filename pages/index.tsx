import { GetServerSidePropsContext } from "next";
import { Group } from "../types";
import GroupItem from "../components/GroupItem/GroupItem";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch("https://tom-sandbox.bettywebblocks.com/home");
  const { groups } = await res.json();

  if (groups) {
    return {
      props: { groups }, // will be passed to the page component as props
    };
  } else {
    return {
      notFound: true,
    };
  }
}

interface HomeProps {
  groups: Group[];
}
const Home: React.FC<HomeProps> = ({ groups }) => {
  return (
    <>
      <main>
        {groups.map((g) => (
          <GroupItem key={Math.random()} {...g} />
        ))}
      </main>
    </>
  );
};

export default Home;
