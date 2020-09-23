export const checkName = (value) => {
  if (value.length < 2)
    return { pass: false, message: "Le pseudo est trop court" };
  if (value.length > 20)
    return { pass: false, message: "Le pseudo est trop long" };
  if (value.length === 0)
    return { pass: false, message: "Le pseudo est obligatoire" };
  if (/[!@#$%^&*()_&'"=+§/;.?,<> ]/.test(value))
    return {
      pass: false,
      message: "Le pseudo ne peut pas contenir de charactères spéciaux",
    };
  return { pass: true };
};
