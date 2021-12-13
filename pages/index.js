import MeetupList from "../components/meetups/MeetupList";

const meetups = [
	{
		id: "m1",
		title: "My First Meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/2/21/Sunset_gondola_Basilica_Della_Salute_.png",
		address: "some address",
		description: "asdkjhfajlksfhljksahdl",
	},
	{
		id: "m2",
		title: "My Second Meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/2/21/Sunset_gondola_Basilica_Della_Salute_.png",
		address: "some address",
		description: "asdkjhfajlksfhljksahdl",
	},
];

function HomePage(props) {
	return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
	// fetch data from API
	return {
		props: {
			meetups: meetups,
		},
	};
}

export default HomePage;
