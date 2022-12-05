import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { prisma } from "../lib/prisma";

interface Users {
	users: {
		id: number;
		firstName: string;
		lastName: string;
		email: string;
		password: string;
		creator: boolean;
		avatar: string;
	}[];
}

interface FormData {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	creator: boolean;
	avatar: string;
}

const Home = ({ users }: Users) => {
	const [form, setForm] = useState<FormData>({
		id: 1,
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		creator: false,
		avatar: "",
	});
	const router = useRouter();
	const refreshData = () => {
		router.replace(router.asPath);
	};
	async function create(data: FormData) {
		try {
			fetch("http://localhost:3000/api/users/create", {
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			}).then(() => {
				setForm({
					id: 1,
					firstName: "",
					lastName: "",
					email: "",
					password: "",
					creator: false,
					avatar: "",
				});
				refreshData();
			});
		} catch (error) {
			console.log(error);
		}
	}
	async function deleteUser(id: number) {
		try {
			fetch(`http://localhost:3000/api/users/${id}`, {
				headers: {
					"Content-Type": "application/json",
				},
				method: "DELETE",
			}).then(() => {
				refreshData();
			});
		} catch (error) {
			console.log(error);
		}
	}
	async function updateUser(id: number) {
		try {
			fetch(`http://localhost:3000/api/users/${id}`, {
				headers: {
					"Content-Type": "application/json",
				},
				method: "PUT",
			}).then(() => {
				refreshData();
			});
		} catch (error) {
			console.log(error);
		}
	}
	async function getUser(id: number) {
		try {
			fetch(`http://localhost:3000/api/users/${id}`, {
				headers: {
					"Content-Type": "application/json",
				},
				method: "GET",
			}).then(() => {
				refreshData();
			});
		} catch (error) {
			console.log(error);
		}
	}
	const handleSubmit = async (data: FormData) => {
		try {
			create(data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(form);
				}}
			>
				<input
					type="text"
					placeholder="firstName"
					value={form.firstName}
					onChange={(e) =>
						setForm({ ...form, firstName: e.target.value })
					}
				></input>
				<input
					type="text"
					placeholder="lastName"
					value={form.lastName}
					onChange={(e) =>
						setForm({ ...form, lastName: e.target.value })
					}
				></input>
				<input
					type="email"
					placeholder="email"
					value={form.email}
					onChange={(e) =>
						setForm({ ...form, email: e.target.value })
					}
				></input>
				<input
					type="password"
					placeholder="password"
					value={form.password}
					onChange={(e) =>
						setForm({ ...form, password: e.target.value })
					}
				></input>
				<button type="submit">sign up</button>
			</form>
			<div>
				<ul>
					{users.map((user) => (
						<div key={user.id}>
							<div>
								<div>{user.firstName}</div>
								<div>{user.lastName}</div>
								<div>{user.email}</div>
							</div>
							<button onClick={() => deleteUser(user.id)}>
								Delete
							</button>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const users = await prisma.user.findMany();

	return {
		props: {
			users,
		},
	};
};

export default Home;
