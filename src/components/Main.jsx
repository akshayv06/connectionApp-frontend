import React from 'react';
import Nav from './NavBar';
import RegisterUser from './RegisterUser';
import SendConnectionRequest from './SendConnectionRequest';
import AcceptRequest from './AcceptRequest';

function Main() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Nav />
      <main className="flex-1 p-8 overflow-auto">
        <section className="mb-8">
          <RegisterUser />
        </section>
        <section className="mb-8">
          <SendConnectionRequest />
        </section>
        <section>
          <AcceptRequest />
        </section>
      </main>
    </div>
  );
}

export default Main;
