import { withSSRContext } from "aws-amplify";
import { useRouter } from "next/router";
import { getSong, listSongs } from "../../src/graphql/queries";

import SongCard from "../../components/songCard";
import styles from "../../styles/Home.module.css";

export async function getStaticPaths() {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({ query: listSongs });
  console.log("API query", data);
  const paths = data.listSongs.items.map((song: any) => ({
    params: { id: song.id },
  }));

  return {
    fallback: true,
    paths,
  };
}

export async function getStaticProps({ params }: any) {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({
    query: getSong,
    variables: {
      id: params.id,
    },
  });
  console.log("API query", data);
  return {
    props: {
      song: data.getSong,
    },
    revalidate: 60,
  };
}

export default function SongDetails({ song }: any) {
  console.log(song);
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Loading&hellip;</h1>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <SongCard song={song}></SongCard>
    </div>
  );
}
