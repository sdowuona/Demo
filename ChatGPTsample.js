function submitQuiz() {
            // Retrieve selected answers
            const q1Answer = document.querySelector('input[name="q1"]:checked');
            const q2Answer = document.querySelector('input[name="q2"]:checked');
            const q3Answer = document.querySelector('input[name="q3"]:checked');

            // Check if all questions are answered
            if (q1Answer && q2Answer && q3Answer) {
                // Check correct answers
                const correctAnswers = {
                    q1: 'paris',
                    q2: 'mars',
                    q3: 'tokyo'
                };

                // Evaluate answers and provide feedback
                let correctCount = 0;
                if (q1Answer.value === correctAnswers.q1) correctCount++;
                if (q2Answer.value === correctAnswers.q2) correctCount++;
                if (q3Answer.value === correctAnswers.q3) correctCount++;

                // Display feedback
                const feedbackElement = document.getElementById('quizFeedback');
                feedbackElement.textContent = `You got ${correctCount} out of 3 questions correct!`;
            } else {
                // Display a message if not all questions are answered
                alert('Please answer all questions before submitting.');
            }
        }
