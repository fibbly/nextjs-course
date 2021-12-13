import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
	function addMeetup(form) {
		console.log(form);
	}

	return <NewMeetupForm onAddMeetup={addMeetup} />;
}

export default NewMeetupPage;
