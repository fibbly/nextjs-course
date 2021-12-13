import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
	return (
		<MeetupDetail
			image={props.meetup.image}
			address={props.meetup.address}
			description={props.meetup.description}
			title={props.meetup.title}
		/>
	);
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: "m1",
				},
			},
			{
				params: {
					meetupId: "m2",
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	//fetch data for a meetup

	const meetupId = context.params.meetupId;
	console.log(meetupId);

	return {
		props: {
			meetup: {
				image:
					"https://upload.wikimedia.org/wikipedia/commons/2/21/Sunset_gondola_Basilica_Della_Salute_.png",
				address: "sdfasfas",
				description: "dasasdfasdf",
				title: "First Meetup",
			},
		},
	};
}

export default MeetupDetails;
