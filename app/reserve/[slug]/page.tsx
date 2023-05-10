import NavBar from "../../../components/NavBar";
import ReservationForm from "../../../components/ReservationForm";

export default function Reserve() {
  <main className="bg-gray-100 min-h-screen w-screen">
    <main className="max-w-screen-2xl m-auto bg-white">
      <NavBar />
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          {/* HEADER */}
          <div>
            <h3 className="font-bold">You're almost done!</h3>
            <div className="mt-5 flex">
              <img
                src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
                alt=""
                className="w-32 h-18 rounded"
              />
              <div className="ml-4">
                <h1 className="text-3xl font-bold">
                  Aiāna Restaurant Collective
                </h1>
                <div className="flex mt-3">
                  <p className="mr-6">Tues, 22, 2023</p>
                  <p className="mr-6">7:30 PM</p>
                  <p className="mr-6">3 people</p>
                </div>
              </div>
            </div>
          </div>
          {/* HEADER */} {/* FORM */}
          <ReservationForm />
        </div>
      </div>
    </main>
  </main>;
}
