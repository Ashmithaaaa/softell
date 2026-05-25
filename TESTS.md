# Tests — SoftSell

Manual test cases run before submission. No automated test suite for this build — would add Vitest + React Testing Library in a production version.

---

## Functional Tests

### Navigation
| Test | Expected | Result |
|---|---|---|
| Click "How It Works" in nav | Smooth scrolls to section | ✅ Pass |
| Click "Why Us" in nav | Smooth scrolls to section | ✅ Pass |
| Click "Testimonials" in nav | Smooth scrolls to section | ✅ Pass |
| Click "Contact" in nav | Smooth scrolls to section | ✅ Pass |
| Click "Get Started" button | Smooth scrolls to Contact | ✅ Pass |
| Scroll down 50px | Navbar gets white background | ✅ Pass |

### Theme Toggle
| Test | Expected | Result |
|---|---|---|
| Click moon icon | Switches to dark mode | ✅ Pass |
| Click sun icon | Switches back to light mode | ✅ Pass |
| Dark mode colors | All text readable, no invisible elements | ✅ Pass |

### Contact Form Validation
| Test | Expected | Result |
|---|---|---|
| Submit empty form | Shows error on Name and Email and License | ✅ Pass |
| Submit invalid email | Shows "Valid email required" error | ✅ Pass |
| Submit without license type | Shows "Please select a license type" | ✅ Pass |
| Submit valid form | Shows success confirmation message | ✅ Pass |

### AI Chat Widget
| Test | Expected | Result |
|---|---|---|
| Click chat bubble | Chat window opens | ✅ Pass |
| Type message and press Enter | Message sends, response loads | ✅ Pass |
| Ask "How does selling work?" | Gets relevant SoftSell answer | ✅ Pass |
| Click × button | Chat window closes | ✅ Pass |

---

## Responsive Tests

| Breakpoint | Test | Result |
|---|---|---|
| 375px (iPhone SE) | Hero text readable, no overflow | ✅ Pass |
| 375px | Nav links hidden, layout stacks | ✅ Pass |
| 768px (iPad) | Cards go 2-column | ✅ Pass |
| 1280px (Desktop) | Full layout, 3-column cards | ✅ Pass |

---

## Browser Tests

| Browser | Result |
|---|---|
| Chrome 124 | ✅ Pass |
| Edge 124 | ✅ Pass |
| Firefox 125 | ✅ Pass |

---

## What Automated Tests Would Cover (if added)

- Form validation logic unit tests
- Component render tests (hero renders headline, cards render correct count)
- Chat widget state tests (messages append correctly)
- Theme toggle state test
