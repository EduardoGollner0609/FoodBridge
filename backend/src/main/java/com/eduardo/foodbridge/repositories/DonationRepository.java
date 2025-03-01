package com.eduardo.foodbridge.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.eduardo.foodbridge.entities.Donation;
import com.eduardo.foodbridge.projections.DonationProjection;

public interface DonationRepository extends JpaRepository<Donation, Long> {

	@Query(nativeQuery = true, value = """
			      SELECT dt.id, us.name AS username, dt.description, dt.city, dt.state
			      FROM tb_donation dt
			      INNER JOIN tb_user us ON us.id = dt.user_id
			WHERE dt.state = :state""", countQuery = """
			           SELECT COUNT(*)
			           FROM tb_donation dt
			           INNER JOIN tb_user us ON us.id = dt.user_id
			           WHERE dt.state = :state
			""")
	Page<DonationProjection> findAllByState(String state, Pageable pageable);

}
