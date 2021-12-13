import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

function MeetupDetails(props) {
	return (
		<Fragment>
			<Head>
				<title>{props.meetup.title}</title>
			</Head>
			<MeetupDetail
				image={props.meetup.image}
				address={props.meetup.address}
				description={props.meetup.description}
				title={props.meetup.title}
			/>
		</Fragment>
	);
}

export async function getStaticPaths() {
	const client = await MongoClient.connect(
		"mongodb+srv://fibble:%40Angel1990@cluster0.e7aia.mongodb.net/meetups?retryWrites=true&w=majority"
	);

	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

	client.close();

	return {
		fallback: false,
		paths: meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
	};
}

export async function getStaticProps(context) {
	//fetch data for a meetup

	const meetupId = context.params.meetupId;

	console.log(meetupId);

	const client = await MongoClient.connect(
		"mongodb+srv://fibble:%40Angel1990@cluster0.e7aia.mongodb.net/meetups?retryWrites=true&w=majority"
	);

	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

	client.close();

	return {
		props: {
			meetup: {
				id: meetup._id.toString(),
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				description: meetup.description,
			},
		},
	};
}

export default MeetupDetails;
