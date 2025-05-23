from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    note = models.CharField(max_length=255, blank=True)
    t_type = models.CharField(max_length=2, choices=[("IN", "Income"), ("EX", "Expense")])
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.t_type} ₹{self.amount}"
