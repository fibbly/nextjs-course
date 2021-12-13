import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

function NewMeetupPage() {
	const router = useRouter();

	async function addMeetup(formData) {
		const response = await fetch("/api/new-meetup", {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();

		console.log(response);

		router.push("/");
	}

	return <NewMeetupForm onAddMeetup={addMeetup} />;
}

export default NewMeetupPage;
