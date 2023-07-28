function skillsMember() {
  const skills = document.querySelector('.skills');
  const skillsTop = skills.offsetTop;

  if (window.scrollY >= skillsTop) {
    skills.classList.add('skills_active');
  } else {
    skills.classList.remove('skills_active');
  }
}