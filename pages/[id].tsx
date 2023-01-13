import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { Group, GroupCodeConfig } from "../types";
import GroupItem from "../components/GroupItem/GroupItem";

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const NOT_FOUND = {
    notFound: true,
  };

  if (!params?.id) {
    return NOT_FOUND;
  }

  const res = await fetch(
    `https://tom-sandbox.bettywebblocks.com/${params.id}`
  );

  try {
    const { groups } = await res.json();
    return groups ? { props: { groups } } : NOT_FOUND;
  } catch (err) {
    return NOT_FOUND;
  }
}

interface CategoryProps {
  groups: Group[];
}

const Category: React.FC<CategoryProps> = ({ groups }) => {
  return (
    <>
      <main>
        {groups.map((g) => (
          <GroupItem key={g.code} {...g} />
        ))}
      </main>
    </>
  );
};

export default Category;
