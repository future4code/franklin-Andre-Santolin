test("Showing jest.fn", () => {
	const mock = jest.fn(() => {
		const user = {
				name: "Astrodev",
				age: 29
		}
		return user
	})
})


test("Testando mock com saída de sucesso", () => {
  const mock = jest.fn(() => {
    return true
  });
});

test("Testando mock com saída de falha", () => {
  const mock = jest.fn(() => {
    return false
  });
});