from django.contrib import admin
from .models import Transaction

@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ("user", "amount", "t_type", "note", "date")
    list_filter = ("t_type", "date")
    search_fields = ("note", "user__username")