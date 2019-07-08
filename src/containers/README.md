# README

TO DO

* Fix schema - google how to create a migration to remove something from a table and add to another (you're removing student_id from courses and adding course_id to students)

* Fix your models - correct the has_many, belongs_to

* Fix your from - because a course no longer belongs to a student, you don't need a collection select in the form for a student

* Create a new form for student - put a collection select to assign them to a course 
