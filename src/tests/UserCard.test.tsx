import React from "react";
import { render, screen } from "@testing-library/react";
import UserCard from "../components/UserCard";

describe("tests for UserCard component", () => {
  const fakeUser = {
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    firstName: "Joni",
    lastName: "Baez",
    country: "USA",
  };

  it("renders disclaimer´s text", () => {
    render(<UserCard user={fakeUser} />);
    const desclaimer = screen.getByText(/Refresh the page to get a new user/i);
    expect(desclaimer).toBeInTheDocument();
  });

  it("renders user´s image", () => {
    render(<UserCard user={fakeUser} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });

  it("renders usersData correctly", () => {
    render(<UserCard user={fakeUser} />);
    const userName = screen.getByText(/Joni/i);
    const userLastName = screen.getByText(/Baez/i);
    const userCountry = screen.getByText(/USA/i);

    expect(userName).toBeInTheDocument();
    expect(userLastName).toBeInTheDocument();
    expect(userCountry).toBeInTheDocument();
  });

  it("checks if App works when IUser is undefined", () => {
    render(<UserCard user={undefined} />);
    const avatar = screen.queryByRole("user-avatar");
    const userName = screen.queryByRole("user-name");
    const country = screen.queryByRole("user-country");

    expect(avatar).not.toBeInTheDocument();
    expect(userName).not.toBeInTheDocument();
    expect(country).not.toBeInTheDocument();
  });
});
