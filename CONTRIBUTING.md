# Contributing to Cure Desk

Thank you for your interest in contributing to Cure Desk! We welcome contributions from the community to help improve this healthcare management platform.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Reporting Issues](#reporting-issues)

## Code of Conduct

By participating in this project, you agree to abide by our code of conduct:
- Be respectful and inclusive
- Focus on constructive feedback
- Help maintain a safe and welcoming environment
- Respect privacy and healthcare data sensitivity

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a new branch** for your feature or bug fix
4. **Make your changes** following our coding standards
5. **Test your changes** thoroughly
6. **Submit a pull request**

## Development Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Divyansh1552005/Cure_Desk.git
cd Cure_Desk
```

2. Install dependencies for all components:
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

# Admin Panel
cd ../admin
npm install
```

3. Set up environment variables:
- Copy `.env.example` to `.env` in backend directory
- Fill in your MongoDB URI, JWT secret, and other required variables

4. Start the development servers:
```bash
# Backend (Terminal 1)
cd backend
npm start

# Frontend (Terminal 2)
cd frontend
npm run dev

# Admin Panel (Terminal 3)
cd admin
npm run dev
```

## How to Contribute

### Types of Contributions
- **Bug Reports**: Help us identify and fix issues
- **Feature Requests**: Suggest new functionality
- **Code Contributions**: Submit bug fixes or new features
- **Documentation**: Improve README, comments, or guides
- **Testing**: Add or improve test coverage

### Areas of Focus
- **Security**: Healthcare data security improvements
- **UI/UX**: User interface and experience enhancements
- **Performance**: Optimization and speed improvements
- **Accessibility**: Making the platform more accessible
- **Mobile Responsiveness**: Better mobile experience
- **API**: Backend API improvements

## Pull Request Process

1. **Create a descriptive branch name**:
   ```bash
   git checkout -b feature/appointment-reminders
   git checkout -b fix/login-validation
   git checkout -b docs/api-documentation
   ```

2. **Make your changes** with clear, focused commits
3. **Write descriptive commit messages**:
   ```bash
   git commit -m "Add appointment reminder email functionality"
   git commit -m "Fix user login validation for special characters"
   ```

4. **Test your changes** thoroughly
5. **Update documentation** if needed
6. **Submit a pull request** with:
   - Clear title and description
   - Reference any related issues
   - Screenshots for UI changes
   - Testing instructions

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Other (specify)

## Testing
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] All tests pass

## Screenshots (if applicable)

## Related Issues
Fixes #(issue number)
```

## Coding Standards

### JavaScript/React
- Use ES6+ features
- Follow React functional components with hooks
- Use meaningful variable and function names
- Add comments for complex logic
- Use proper error handling

### CSS/Styling
- Use Tailwind CSS classes consistently
- Follow mobile-first responsive design
- Maintain consistent spacing and colors
- Use semantic class names

### Backend/API
- Follow RESTful API conventions
- Use proper HTTP status codes
- Implement proper error handling
- Add input validation
- Follow security best practices

### File Structure
- Keep components small and focused
- Use descriptive file names
- Organize files logically
- Separate concerns properly

## Reporting Issues

### Bug Reports
When reporting bugs, please include:
- **Description**: Clear description of the issue
- **Steps to Reproduce**: Detailed steps to recreate the bug
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: Browser, OS, Node.js version
- **Screenshots**: If applicable

### Feature Requests
For feature requests, please include:
- **Problem Statement**: What problem does this solve?
- **Proposed Solution**: How should it work?
- **Alternatives**: Other solutions considered
- **Additional Context**: Screenshots, mockups, etc.

### Security Issues
For security-related issues:
- **Do NOT** create public issues
- Email directly to: officialdslc1552005@gmail.com
- Include detailed description and steps to reproduce

## Development Guidelines

### Healthcare Data Considerations
- Always prioritize patient data privacy
- Follow HIPAA-like guidelines even if not required
- Implement proper data encryption
- Use secure authentication methods
- Log access to sensitive data appropriately

### Testing
- Write unit tests for new functionality
- Test edge cases and error scenarios
- Ensure mobile responsiveness
- Test with different user roles (patient, doctor, admin)
- Verify security implementations

### Performance
- Optimize images and assets
- Minimize API calls
- Implement proper caching
- Consider database query optimization
- Monitor bundle sizes

## Getting Help

- **Documentation**: Check the README.md first
- **Issues**: Search existing issues before creating new ones
- **Discussions**: Use GitHub Discussions for questions
- **Contact**: Email officialdslc1552005@gmail.com for direct support

## Recognition

Contributors will be acknowledged in:
- README.md contributors section
- Release notes for significant contributions
- Special thanks for major features or fixes

Thank you for contributing to Cure Desk and helping improve healthcare management! 🏥💙