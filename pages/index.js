import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>React Meetups</title>
				<meta name="description" content="adkljfkladjfakljsdfklj" />
			</Head>
			<MeetupList meetups={props.meetups} />
		</Fragment>
	);
}

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	//fetch data from API

// 	return {
// 		props: {
// 			meetups,
// 		},
// 	};
// }

export async function getStaticProps() {
	// fetch data from API
	const client = await MongoClient.connect(
		"mongodb+srv://fibble:%40Angel1990@cluster0.e7aia.mongodb.net/meetups?retryWrites=true&w=majority"
	);

	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 10,
	};
}

export default HomePage;
